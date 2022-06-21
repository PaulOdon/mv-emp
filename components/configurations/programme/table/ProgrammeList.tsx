import React from "react";
import { Order } from "../../../contracts/table/type-variable";
import DataSMIE from "./programme-type-variable";
import { Box, Checkbox, IconButton, Paper, styled } from "@mui/material";
import SmieTableHeader from "./ProgrammeTableHeader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableToolbarSmie from "./ProgrammeTableToolbar";
import { getComparator, stableSort } from "../../../contracts/table/function";
import { BtnActionContainer } from "../../../contracts/ListContract";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProgrammeData from "./programme-type-variable";
import { programmerows } from "./programme-constant";

const ProgrammeList = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] =
    React.useState<keyof ProgrammeData>("programme");
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
      const newSelecteds = programmerows.map((n) => n.programme);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - programmerows.length) : 0;

  return (
    <TableSection>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableToolbarSmie numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"small"}
            >
              <SmieTableHeader
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={programmerows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
            rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(programmerows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.programme);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        //   onClick={(event) => handleClick(event, row.reference)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.programme}
                        selected={isItemSelected}
                      >
                        <TableCell
                          padding="checkbox"
                          onClick={(event) => handleClick(event, row.programme)}
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
                          {row.programme}
                        </TableCell>
                        <TableCell align="left">{row.parente}</TableCell>
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
            count={programmerows.length}
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

export default ProgrammeList;
