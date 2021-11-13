import React, { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Chip } from "@material-ui/core";
import swal from "sweetalert";

const ManageOrder = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [updateOrder, setUpdateOrder] = useState(false);
  let statusBtnRef = useRef();

  useEffect(() => {
    fetch("https://hidden-castle-03944.herokuapp.com/all-order")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, [updateOrder]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://hidden-castle-03944.herokuapp.com/orderDelete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              setUpdateOrder(!updateOrder);
            }
          });
        swal("Item has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  //Update Status

  const handleUpdateStatus = (id) => {
    const url = `https://hidden-castle-03944.herokuapp.com/update-status/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setUpdateOrder(!updateOrder);
          if (statusBtnRef.current) {
            statusBtnRef.current.setAttribute("disabled", "disabled");
          }
        }
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrder.map((item) => (
            <TableRow
              key={item._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.email}</TableCell>
              <TableCell align="left">{item.productName}</TableCell>
              <TableCell align="left">
                {item.status ? (
                  <Chip label="Shipped" className="success" />
                ) : (
                  <Chip label="Pending" className="danger" />
                )}
              </TableCell>
              <TableCell align="left">
                <Button
                  className="danger ms-1 mb-1"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
                <Button
                  ref={statusBtnRef}
                  onClick={() => handleUpdateStatus(item._id)}
                  className="success ms-1 mb-1"
                  disabled={item.status}
                >
                  Shipped
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageOrder;
