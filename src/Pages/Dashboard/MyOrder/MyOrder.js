import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Chip } from "@material-ui/core";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import "./myorder.css";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [updateOrder, setUpdateOrder] = useState(false);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [updateOrder]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `http://localhost:5000/orderDelete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              setUpdateOrder(true);
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
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myOrder.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.productName}
                </TableCell>
                <TableCell align="right">
                  {item.status ? (
                    <Chip label="Shipped" className="success" />
                  ) : (
                    <Chip label="Pending" className="danger" />
                  )}
                </TableCell>
                <TableCell align="right">
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

export default MyOrder;
