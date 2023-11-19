export interface UserModel {
  id: number;
  username: string;
  email: string;
  userRole: string;
  confirmed: boolean;
  createdAt: string;
  confirmedByAdmin: boolean;
}
