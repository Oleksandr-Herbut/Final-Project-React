import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Stack,
  styled,
} from "@mui/material";

// Стили для диалога
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 20,
    padding: theme.spacing(4),
    backgroundColor: "#0D50FF", // Синий фон
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)", // Легкая тень
    minWidth: "400px",
  },
}));

// Стили для кнопки закрытия
const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "#ffffff", // Красный цвет кнопки
  padding: theme.spacing(1),
}));

// Стили для заголовка
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: 40,
  fontWeight: 800,
  color: "#ffffff", // Синий цвет текста
  lineHeight: "3rem",
  padding: "0 16px",
  textAlign: "center", // Центрирование заголовка
}));

// Стили для контента
const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center", // Центрирование текста
  fontSize: 20,
  color: "#ffffff",
  fontWeight: 600,
}));

export const DialogComponent = ({ open, setOpen }) => {
  return (
    <StyledDialog open={open} onClose={() => setOpen(false)}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <StyledDialogTitle>Congratulations!</StyledDialogTitle>
        <CloseButton aria-label="close" onClick={() => setOpen(false)}>
          <CloseIcon fontSize="large" />
        </CloseButton>
      </Stack>
      <StyledDialogContent>
        <Typography mb={2}>
          Your order has been successfully placed on the website.
        </Typography>
        <Typography>
          A manager will contact you shortly to confirm your order.
        </Typography>
      </StyledDialogContent>
    </StyledDialog>
  );
};
