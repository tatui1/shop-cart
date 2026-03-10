import { useEffect, useState } from "react"
import type { ICart } from "../../types"
import { useNavigate } from "react-router"
import { Container, Typography, Table, TableBody,TableCell, TableHead, TableRow, Box, Button} from "@mui/material"
import { BASE_URL } from "../../constants"

export const HomePage = () => {
  const [carts, setCarts] = useState<ICart[]>([])
  const navigate = useNavigate()

    useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/carts?limit=12`)
        const data = await response.json()
        setCarts(data.carts)
      } catch (error) {
        console.log("Ошибка при получении списка:", error)
      }
    }
    getCarts()
  }, [])

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'rgb(222, 90, 255)' }}>
        Список корзин
      </Typography>

      <Table size="medium">
        <TableHead sx={{ backgroundColor: 'rgb(245, 250, 255)' }}> 
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Сумма</b></TableCell>
            <TableCell><b>Скидка</b></TableCell>
            <TableCell><b>Товары</b></TableCell>
            <TableCell align="right"><b>Действия</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>{cart.id}</TableCell>
              <TableCell>{cart.total}$</TableCell>
              <TableCell sx={{ color: 'rgb(46, 125, 50)', fontWeight: 'bold' }}>{cart.discountedTotal}$</TableCell>
              <TableCell>{cart.totalProducts} шт.</TableCell>
              <TableCell align="right">
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end'}}>
                  <Button size="small" variant="outlined" onClick={() => navigate(`/cart/${cart.id}`)}>
                    Корзина
                  </Button>
                  <Button size="small" variant="contained" sx={{ backgroundColor: 'rgb(222, 90, 255)' }} onClick={() => navigate(`/user/${cart.userId}`)}>
                    Профиль
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}