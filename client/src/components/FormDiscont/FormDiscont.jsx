import React, { useState } from "react";
import { Typography, Alert, Snackbar, Box } from "@mui/material";
import Cats_Dogs from "../../images/Cats_Dogs.png";
import styles from "./FormDiscont.module.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация данных
    if (!name || !phone || !email) {
      setError("Пожалуйста, заполните все поля.");
      setSuccess(false);
      return;
    }

    // Успешная отправка формы
    setSuccess(true);
    setError("");

    // Очистка полей формы после успешной отправки
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleClose = () => {
    setSuccess(false);
    setError("");
  };

  return (
    <div className={styles.container}>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(261.47deg, #2451C6 32.63%, #0D50FF 98.96%)",
          borderRadius: 4,
          mb: 10,
        }}
      >
        <Typography
          sx={{ paddingTop: 4 }}
          align="center"
          color="#FFFFFF"
          variant="h2"
          fontWeight={700}
        >
          5% off on the first order
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <img
            className="cats_dogs"
            src={Cats_Dogs}
            alt="Cats_Dogs"
            style={{ maxWidth: "100%" }}
          />

          {/* Форма справа */}
          <Box sx={{ flexBasis: "40%", mb: 4 }}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                placeholder="Name"
                type="text"
                value={name} // Привязка значения поля
                onChange={(e) => setName(e.target.value)}
                className={styles.textInput}
                required
              />

              <input
                placeholder="Phone number"
                type="number"
                value={phone} // Привязка значения поля
                onChange={(e) => setPhone(e.target.value)}
                className={styles.textInput}
                required
              />

              <input
                placeholder="Email"
                type="email"
                value={email} // Привязка значения поля
                onChange={(e) => setEmail(e.target.value)}
                className={styles.textInput}
                required
              />

              <button type="submit" className={styles.button}>
                Get discount
              </button>
            </form>
          </Box>
        </Box>
      </Box>

      {/* Всплывающее уведомление для успеха */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Поздравляем! Вы получили 5% скидку!
        </Alert>
      </Snackbar>

      {/* Всплывающее уведомление для ошибки */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Что-то пошло не так: {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default RegisterForm;
