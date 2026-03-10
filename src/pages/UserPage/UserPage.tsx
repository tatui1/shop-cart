import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import type { IUser } from "../../types"
import { BASE_URL } from "../../constants"
import { Container, Typography, Avatar, Box, Button } from "@mui/material"

export const UserPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    fetch(`${BASE_URL}/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) return <Container sx={{ mt: 4 }}><Typography>Загрузка...</Typography></Container>

  return (
    <Container sx={{ mt: 4 }}>
      <Button variant="text" onClick={() => navigate('/')} sx={{ mb: 3 }}>
        ← Назад к списку
      </Button>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, p: 2, backgroundColor: 'rgb(245, 245, 245)', borderRadius: 2 }}>
        <Avatar src={user.image} sx={{ width: 100, height: 100, mr: 3, border: '2px solid rgb(222, 90, 255)' }} />
        <Box>
          <Typography variant="h4" sx={{ color: 'rgb(222, 90, 255)' }}>{user.firstName} {user.lastName}</Typography>
          <Typography sx={{ color: 'rgb(85, 85, 85)' }}>{user.company.title}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, pl: 2 }}>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>1.</b> Username: {user.username}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>2.</b> Email: {user.email}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>3.</b> Телефон: {user.phone}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>4.</b> Возраст: {user.age} лет</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>5.</b> Пол: {user.gender === 'male' ? 'Мужской' : 'Женский'}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>6.</b> Дата рождения: {user.birthDate}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>7.</b> Город: {user.address.city}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>8.</b> Адрес: {user.address.address}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>9.</b> Место работы: {user.company.name}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>10.</b> Животные: {user.animals || '—'}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>11.</b> Должность: {user.company.title}</Typography>
        <Typography><b style={{ color: 'rgb(222, 90, 255)' }}>12.</b> ID покупателя: {user.id}</Typography>
      </Box>
    </Container>
  )
}