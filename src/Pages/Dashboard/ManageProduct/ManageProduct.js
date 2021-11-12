import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-ui/core";
import swal from "sweetalert";

const ManageProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [updateProduct, setUpdateProduct] = useState(false);

  useEffect(() => {
    fetch("https://hidden-castle-03944.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [updateProduct]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://hidden-castle-03944.herokuapp.com/productDelete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              setUpdateProduct(!updateProduct);
            }
          });
        swal("Item has been deleted!", {
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="all-prodyct-table-body">
            {allProduct.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={item.image} alt="" />
                </TableCell>
                <TableCell align="left">{item.productName}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell align="left">
                  <Button
                    className="danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageProduct;
