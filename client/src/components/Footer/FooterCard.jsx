import { Box, Stack, Typography } from "@mui/material";

export const FooterCard = ({ title, body, type }) => {
  return (
    <Box
      sx={{
        width: type === "lg" ? 780 : 548,
        backgroundColor: "#F1F3F4",
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Stack direction="column">
        <Typography mb={1}>{title}</Typography>
        <Typography variant="h3">{body}</Typography>
      </Stack>
    </Box>
  );
};
