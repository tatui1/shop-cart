import {useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { ICart } from "../../types";

export const CartPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState<ICart | null>(null);

  return ()
}