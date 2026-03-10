import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import type { ICart } from "../../types"
import { BASE_URL } from "../../constants"
import { Container, Typography, Box, Button, Divider } from "@mui/material"

export const CartPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [cart, setCart] = useState<ICart | null>(null)

  useEffect(() => {
    fetch(`${BASE_URL}/carts/${id}`)
      .then(res => res.json())
      .then(data => setCart(data))
  }, [id])

  if (!cart) return <Container sx={{ mt: 4 }}><Typography>Загрузка...</Typography></Container>

  return (
    <Container sx={{ mt: 4 }}>
      <Button color="primary" onClick={() => navigate('/')} sx={{ mb: 2 }}>
        ← Назад к списку
      </Button>

      <Typography variant="h4" gutterBottom sx={{ color: 'rgb(222, 90, 255)' }}>Корзина №{id}</Typography>
      
      <Box sx={{ mb: 4, p: 2, borderLeft: '4px solid  rgb(105, 0, 131)', backgroundColor: 'rgb(245, 205, 255)' }}>
        <Typography>Общая сумма: <b>{cart.total}$</b></Typography>
        <Typography>Со скидкой: <b style={{ color: 'rgb(46, 125, 50)' }}>{cart.discountedTotal}$</b></Typography>
        <Typography>Всего товаров: {cart.totalProducts} шт.</Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>Товары:</Typography>
      
      <Box>
        {cart.products.map((product) => (
          <Box key={product.id} sx={{ display: 'flex', alignItems: 'center', py: 2, borderBottom: '1px solid rgb(238, 238, 238)' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: 60, height: 60, borderRadius: 4, border: '1px solid rgb(221, 221, 221)' }} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: '500', color: 'rgb(222, 90, 255)' }}>{product.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}$ <span style={{ color: 'rgb(211, 47, 47)' }}>(скидка {product.discountPercentage}%)</span>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  )
}