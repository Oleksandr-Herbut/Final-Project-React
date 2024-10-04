import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";

export const FilterSelect = ({ options, defaultValue, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (value) => {
    setIsOpen(false);
    if (handleSelect) {
      handleSelect(value);
    }
  };
  return (
    <Box className="select__container">
      <Box
        className={`
                select ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{defaultValue || "Select option"}</span>
        {isOpen ? (
          <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
        )}
      </Box>
      {isOpen && (
        <ul className="custom-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`custom-option ${
                option.value === defaultValue ? "selected" : ""
              }`}
              onClick={() => onClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};
