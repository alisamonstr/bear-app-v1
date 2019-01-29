/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { Field, Form } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
import './index'
import { ItemGallery } from '../components'
import { fetchCatalogItems, editItem } from '../actions/catalog-items.action'
import { MyButton } from '../components/button'
import { SimpleSnackbar } from '../components/error.component'


const ItemBox = styled.div`
  width: 80%;
  background-color: white;
  margin-left: 150px;
  margin-top: 30px;
  box-shadow: 2px 3px 20px rgba(0,0,0,0.5);
  display: flex;
  padding: 50px;
  @media (max-width: 1000px){
  width: 90vw;
  margin-left: 10px;
  margin-top: 30px;
  padding: 10px;
  flex-direction: column;
  }
`
const ItemInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 150px;
  flex-direction: column;
   @media (max-width: 1000px){
   margin-left: 10px;
   padding-bottom: 15px;
   }
`

const InputField = styled(TextField)`
    margin-bottom: 20px !important;
    width: 200px
`
const BigInputField = styled(TextField)`
    margin-bottom: 20px !important;
    width: 400px ;
`
const OrderButton = styled(MyButton)`
     margin-top: 45px !important;
    width: 100px;
`
const StyledFormControl = styled(FormControl)`
width: 100px;
`
const mapStateToProps = state => ({ items: state.catalogItems.items })

class EditItem extends Component {
  static propTypes = {
    items: PropTypes.array,
    match: PropTypes.object,
    dispatch: PropTypes.func,
  }
  state = {
    open: false,
    error: false,
  }

  componentDidMount() {
    this.props.dispatch(fetchCatalogItems())
  }

  onSubmit = (values) => {
    this.props.dispatch(editItem(values)).catch(() => this.setState({ error: true }))
  }
  validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.description) {
      errors.description = 'Required'
    }
    if (!values.size) {
      errors.size = 'Required'
    }
    if (!values.price) {
      errors.price = 'Required'
    }
    return errors
  }
  handleError = () => {
    this.setState({ error: false })
  }
  handleClose = () => {
    this.setState({ open: false })
  }

  handleOpen = () => {
    this.setState({ open: true })
  }
  categories = () => {
    const y = this.props.items.map(x => x.category)
    return [...new Set(y)]
  }

  render() {
    console.log(this.categories())
    const item = this.props.items.find(i => String(i.id) === this.props.match.params.itemUrl)
    if (!item) {
      return <div>Загрузка...</div>
    }
    return (

      <ItemBox>
        <ItemGallery images={item.images} />
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          initialValues={item}
          mutators={{
            ...arrayMutators,
          }}

        >
          {({ handleSubmit, mutators: { push, pop } }) => (
            <ItemInfoBox>
              <form onSubmit={handleSubmit}>
                <Field name="title">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="Имя"
                        autoComplete="title"
                        className="edit"
                        type="text"
                      />
                    </div>
                  )}
                </Field>
                <Field name="description">
                  {({ input, meta }) => (
                    <div>
                      <BigInputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="10"
                        rows={4}
                        className="textField"
                        autoComplete="description"
                        type="text"
                      />
                    </div>
                  )}
                </Field>
                <Field name="size">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="Размер"
                        className="edit"
                        autoComplete="size"
                        type="text"
                      /> см.
                    </div>
                  )}
                </Field>
                <Field name="price">
                  {({ input, meta }) => (
                    <div>
                      <InputField
                        {...input}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        label="Цена"
                        className="edit"
                        autoComplete="price"
                        type="text"
                      />
                    </div>
                  )}
                </Field>
                <Field name="category">
                  {({ input }) => (
                    <div>
                      <StyledFormControl>

                        <InputLabel htmlFor="demo-controlled-open-select">Category</InputLabel>
                        <Select
                          {...input}
                          open={this.state.open}
                          onClose={this.handleClose}
                          onOpen={this.handleOpen}
                        >
                          <MenuItem value="bears">Bears</MenuItem>
                          <MenuItem value="toys">Toys</MenuItem>
                          <MenuItem value="others">Others</MenuItem>
                        </Select>
                      </StyledFormControl>

                    </div>
                  )}
                </Field>
                <div>
                  <div className="buttons">
                    <button type="button" onClick={() => push('images', '')}>
                      Add Image
                    </button>
                    <button type="button" onClick={() => pop('images')}>
                      Remove Image
                    </button>
                  </div>
                  <FieldArray name="images">
                    {({ fields, value }) =>
                      fields.map((name, index) => (
                        <div key={name}>
                          <img src={value ? value[index] : ''} />
                          <Field name={name}>
                            {({ input }) => (
                              <div>
                                <div>Image. #{index + 1} url</div>
                                <input type="text" {...input} placeholder="url" />
                                <div
                                  onClick={() => fields.remove(index)}
                                  style={{ cursor: 'pointer' }}
                                >
                                  X
                                </div>
                              </div>
                            )}
                          </Field>
                        </div>
                      ))
                    }
                  </FieldArray>
                </div>
                <OrderButton type="submit">
                  <div> сохранить</div>
                </OrderButton>
              </form>
            </ItemInfoBox>
          )}
        </Form>
        <SimpleSnackbar handleError={this.handleError} error={this.state.error} />

      </ItemBox>

    )
  }
}

export const EditItemContainer = connect(mapStateToProps)(EditItem)
