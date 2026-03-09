import {useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { IUser } from "../../types";

export const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  return ()
}