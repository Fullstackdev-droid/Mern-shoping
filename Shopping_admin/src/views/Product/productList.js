import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { getproduct, CategoryDelete } from '../../actions/users';
import {toastAlert} from '../../lib/toastAlert';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default function StickyHeadTable() {
    const classes = useStyles();
    const history=useHistory();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tableDatas, setTableDatas] = useState();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

   function editR(id) 
    {
         {
            history.push('/productEdit/'+id)
        }
        
    }
    const deleteProduct = async(id) => {
      if(window.confirm("Do you really want to delete this Product?")){
        let passData = {
        id:id
      }
     const {status,message} = await CategoryDelete(passData)
     if(status){
        
        toastAlert('success',message,'CategoryDelete')
        CategoryList()
      }
      } 
      
    }
    const add = async () =>{
        history.push('/shopyProductAdd')
    }
    const CategoryList = async () => {
        var { status, productDetails } = await getproduct();
        // debugger
        console.log(productDetails,"tableData",)
        setTableDatas(productDetails);
    }
    
    useEffect(() => {
     CategoryList();
    }, [])

    return (
        <div>
            <div className="page_header">
                <h2>Product List</h2>
                <Button variant="contained" color="primary" onClick={add}>Add</Button>
            </div>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align={"left"} style={{ minWidth: "170" }}>S.No</StyledTableCell>
                                <StyledTableCell align={"left"} style={{ minWidth: "170" }}>Product Name</StyledTableCell>
                                <StyledTableCell align={"left"} style={{ minWidth: "170" }}>Product Price</StyledTableCell>
                                <StyledTableCell align={"left"} style={{ minWidth: "170" }}>Product Description</StyledTableCell>
                                <StyledTableCell align={"left"} style={{ minWidth: "170" }}>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {tableDatas && tableDatas.map((row,e) => {
                            
                                return (
                                    <TableRow>
                                        <TableCell  align={"left"} > {e+1} </TableCell>
                                        <TableCell  align={"left"} > {row.productName} </TableCell>
                                        <TableCell  align={"left"} > ₹{row.productPrice} </TableCell>
                                        <TableCell  align={"left"} > {row.productDescription} </TableCell>
                                        <TableCell align={"left"}>
                                            <Link onClick={() => editR(row._id)}><EditIcon  style={{ color: "#109ebf" }} /></Link>
                                            <Link onClick={() => deleteProduct(row._id)}><DeleteIcon  style={{ color: "#109ebf" }} /></Link>
                                        </TableCell >
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={tableDatas && tableDatas.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            </div>
    );
}
