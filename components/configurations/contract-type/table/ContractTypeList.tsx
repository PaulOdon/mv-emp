import React from "react";
import { Order } from "../../../contracts/table/type-variable";
import DataSMIE from "./contractType-type-variable";
import { Box, Checkbox, IconButton, Paper, styled } from "@mui/material";
import ContractTypeTableHeader from "./ContractTypeTableHeader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ContractTypeTableToolbar from "./ContractTypeTableToolbar";
import { getComparator, stableSort } from "../../../contracts/table/function";
import { BtnActionContainer } from "../../../contracts/ListContract";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContractTypeData from "./contractType-type-variable";
import { contractTyperows } from "./contractType-constant";

const ContractTypeList = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] =
    React.useState<keyof ContractTypeData>("contractType");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof DataSMIE
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = contractTyperows.map((n) => n.contractType);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - contractTyperows.length)
      : 0;

  return (
    <TableSection>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <ContractTypeTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"small"}
            >
              <ContractTypeTableHeader
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={contractTyperows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
            rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(contractTyperows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.contractType);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        //   onClick={(event) => handleClick(event, row.reference)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.contractType}
                        selected={isItemSelected}
                      >
                        <TableCell
                          padding="checkbox"
                          onClick={(event) =>
                            handleClick(event, row.contractType)
                          }
                        >
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          align="left"
                        >
                          {row.contractType}
                        </TableCell>
                        <TableCell align="right">
                          <BtnActionContainer
                            direction="row"
                            justifyContent="center"
                          >
                            <Link href="#">
                              <IconButton
                                color="accent"
                                aria-label="Details"
                                component="span"
                              >
                                <VisibilityIcon />
                              </IconButton>
                            </Link>
                            <IconButton
                              color="primary"
                              aria-label="Modifier"
                              component="span"
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              color="warning"
                              aria-label="Supprimer"
                              component="span"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </BtnActionContainer>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={contractTyperows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
    control={<Switch checked={dense} onChange={handleChangeDense} />}
    label="Dense padding"
    /> */}
      </Box>
    </TableSection>
  );
};

const TableSection = styled("div")(({ theme }) => ({
  paddingBlock: theme.spacing(2),
  paddingLeft: theme.spacing(2),
}));

export default ContractTypeList;
