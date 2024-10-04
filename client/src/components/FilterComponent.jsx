import { Button, Stack, Typography } from "@mui/material";
import { FilterSelect } from "./FilterSelect";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, toggleDiscount } from "../store/filterSlice";
import FilterListIcon from "@mui/icons-material/FilterList";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import { styled } from "@mui/material";
import checkmark from "../images/checkmark.png";
import { filter } from "../utils";

const options = [
  { value: "default", label: "by default" },
  { value: "newest", label: "newest" },
  { value: "price-high-low", label: "price: high-low" },
  { value: "price-low-high", label: "price: low-high" },
];

export const FilterInput = styled("input")({
  border: "1px solid #DDDDDD",
  backgroundColor: "#FFFFFF",
  height: "fit-content",
  width: 112,
  padding: "8px 16px",
  borderRadius: 6,
  fontSize: 16,
  "&::placeholder": {
    color: "#8B8B8B",
  },
});

export const FilterCheckbox = styled("input")({
  appearance: "none",
  width: 34,
  height: 34,
  border: "1px solid #DDDDDD",
  borderRadius: 8,
  cursor: "pointer",
  "&:checked": {
    backgroundColor: "#0D50FF",
    borderColor: "#0D50FF",
    position: "relative",
  },
  "&:checked:after": {
    content: `url(${checkmark})`,
    position: "absolute",
    top: 4,
    left: 4,
    width: 5,
    height: 10,
  },
});

export const FilterComponent = ({ sales = true }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  // const filterObject = useSelector((state) => state.filter);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const customFilter = useSelector(filter);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleSelectChange = (value) => {
    dispatch(
      setFilter({
        ...customFilter,
        sort: value,
      })
    );
  };

  const onChangePriceFrom = (e) => {
    const value = Number(e.target.value);
    dispatch(
      setFilter({
        ...customFilter,
        price: { ...customFilter.price, from: value },
      })
    );
  };

  const onChangePriceTo = (e) => {
    if (e?.target?.value === "") {
      console.log("empty");
      return;
    }
    const value = Number(e.target.value);
    dispatch(
      setFilter({
        ...customFilter,
        price: { ...customFilter.price, to: value },
      })
    );
  };

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<FilterListIcon />}
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "flex",
            xs: "flex",
            xxs: "flex",
          },
          mb: 5,
        }}
      >
        Filter
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack gap={2} sx={{ padding: 3 }}>
          <Stack direction="row" gap={2}>
            <Typography>Price</Typography>
            <FilterInput
              type="number"
              placeholder="from"
              value={customFilter.price.from}
              onChange={onChangePriceFrom}
            />
            <FilterInput
              type="number"
              placeholder="to"
              value={customFilter.price.to}
              onChange={onChangePriceTo}
            />
          </Stack>
          {sales && (
            <Stack direction="row" gap={2}>
              <Typography>Discounted items</Typography>
              <FilterCheckbox
                type="checkbox"
                checked={customFilter.isDiscount}
                onChange={() =>
                  dispatch(toggleDiscount(!customFilter.isDiscount))
                }
              />
            </Stack>
          )}
          <Stack direction="row" gap={2}>
            <Typography>Sorted</Typography>
            <FilterSelect
              options={options}
              defaultValue={customFilter.sort}
              handleSelect={handleSelectChange}
            />
          </Stack>
        </Stack>
      </Popover>
      <Stack
        direction="row"
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
            xxs: "none",
          },
        }}
        mb={5}
        gap={2}
        alignItems="center"
      >
        <Typography>Price</Typography>
        <FilterInput
          type="number"
          placeholder="from"
          value={customFilter.price.from}
          onChange={onChangePriceFrom}
        />
        <FilterInput
          type="number"
          placeholder="to"
          value={customFilter.price.to}
          onChange={onChangePriceTo}
        />
        {sales && (
          <>
            <Typography>Discounted items</Typography>
            <FilterCheckbox
              type="checkbox"
              checked={customFilter.isDiscount}
              onChange={() =>
                dispatch(toggleDiscount(!customFilter.isDiscount))
              }
            />
          </>
        )}
        <Typography>Sorted</Typography>
        <FilterSelect
          options={options}
          defaultValue={customFilter.sort}
          handleSelect={handleSelectChange}
        />
      </Stack>
    </>
  );
};
