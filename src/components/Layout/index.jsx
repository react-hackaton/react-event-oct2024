import { Container, Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

export function Layout({ children }) {
  return (
    <Box width="1400px"
         maxWidth="100%" sx={{ margin: "0 auto" }}>
      <Header />
      <Container width="1400px">
        {children}
      </Container>
      <Footer />
    </Box>
  )
    ;
}
