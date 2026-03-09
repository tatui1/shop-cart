import { useEffect, useState } from "react"
import type { ICart } from "../../types"
import { useNavigate } from "react-router"
import { Container, Typography} from "@mui/material"
import { BASE_URL } from "../../constants"

export const HomePage = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const navigate = useNavigate();

    useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/carts?limit=12`); 
        const data = await response.json();
        setCarts(data.carts); 
      } catch (error) {
        console.log("Ошибка при получении списка:", error);
      }
    };
    getCarts();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, color: '#1976d2' }}>
            Список корзин
        </Typography>
    </Container> 
  );
}