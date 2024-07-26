import { User } from "./user.interface";

export interface Room {
    isAvailable: boolean;
    id: string;
    occupiedBy: User;
  }