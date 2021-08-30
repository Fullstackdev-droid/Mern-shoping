import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select';
//import avatar from "assets/img/faces/marc.jpg";
import isEmpty from '../../lib/isEmpty';
import config from '../../lib/config';
import {toastAlert} from '../../lib/toastAlert';
import {  getCmsData, updateCmsData, categoryAdd } from '../../actions/users';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

// toaster config
toast.configure();
let toasterOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}


// const initialFormValue = {
//   "productName":"",
//   "productPrice":"",
//   "productDescription":""
// }

const useStyles = makeStyles(styles);

export default function CategoryAdd(props) {
  const initialFormValue = {
    "productName":"",
    "productPrice":"",
    "productDescription":""
  }
  
  
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(initialFormValue);
  const { productName, productPrice,productDescription } = formValue
  const [validateError, setValidateError] = useState({});
  const { productNameErr,productPriceErr, productDescriptionErr } = validateError

  const { Id } = useParams();
   // console.log(userId,"asdfdsfdsfdsf");


  // function
  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target); 
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } }
    setFormValue(formData)
  }
  
  const handleFormSubmit = async () => {
    let passData = {
      productName,
      productPrice,
      productDescription
    }
      const { status, errors, message } = await categoryAdd(passData)
      // console.log(errors,'errorserrorserrors')
      if(errors){
        setValidateError(errors)
      }

      if(status){
        setValidateError({})
        setFormValue(initialFormValue)
        toastAlert('success',message,'categoryAdd')
        history.push('/productList')
      }
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <form className={classes.form} noValidate>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Product add </h4>
                <p className={classes.cardCategoryWhite}>Add your product with details</p>
              </CardHeader>
              <CardBody>
                <GridContainer>  
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Product Name"
                        onChange={onChange}
                        id="productName"
                        value={productName}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {
                          <span className="text-danger">{productNameErr}</span>
                      }

                      <CustomInput
                        labelText="Product Price"
                        onChange={onChange}
                        id="productPrice"
                        value={productPrice}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {
                          <span className="text-danger">{productPriceErr}</span>
                      }
                      <CustomInput
                        labelText="Product Description"
                        onChange={onChange}
                        id="productDescription"
                        value={productDescription}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                      {
                          <span className="text-danger">{productDescriptionErr}</span>
                      }
                                              
                    </GridItem>
                  </GridContainer>
                  <GridContainer>                 
                    <GridItem xs={12} sm={12} md={3}>
                   
                    </GridItem>

                    <GridItem xs={12} sm={12} md={3}></GridItem>
                                        
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                    
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={handleFormSubmit} type="button">Add product</Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>       
      </GridContainer>
    </div>
  );
}
