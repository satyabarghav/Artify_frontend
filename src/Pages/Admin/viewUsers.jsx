import { useState, useEffect } from "react";
import axios from "axios";
import config from "@/config";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${config.url}/viewUsers`);

        if (response.status === 200) {
          setUsers(response.data);
          console.log("Data Fetched");
        } else {
          console.error("Error fetching users:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  const deleteUser = async (id) => {
    try {
      console.log("Deleting user with id:", id)
      const response = await axios.delete(`${config.url}/deleteUser/${id}`);
      if (response.status === 200) {
        console.log("User deleted successfully");
      } else {
        console.error("Error deleting user:", response.statusText);
      }
    }
    catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-9">
      <Table>
        <TableCaption>A list of your Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User ID</TableHead>
            <TableHead>username</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user._id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button onClick={() => deleteUser(user._id)}  variant="destructive">Delete User</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
