import { useState } from "react"
import type { ICart } from "../../types"
import { useNavigate } from "react-router"
import { Container} from "@mui/material"

export const HomePage = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      {}
    </Container>
  );
}