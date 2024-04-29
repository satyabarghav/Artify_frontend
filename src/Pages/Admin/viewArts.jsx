import { useState, useEffect } from "react";
import axios from "axios";
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
export default function viewArts() {
  const [artsData, setArtsData] = useState([]);
  
  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await axios.get("http://localhost:2014/viewArts");
        if (response.status === 200) {
          setArtsData(response.data);
          console.log("Data Fetched");
        } else {
          console.error("Error fetching arts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching arts:", error);
      }
    };    
    fetchArts();
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen mx-9">
        <Table>
          <TableCaption>A list of Art Pieces on your Service</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User ID</TableHead>
              <TableHead>username</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {artsData.map((user) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{user._id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => deleteUser(user._id)}
                    variant="destructive"
                  >
                    Delete User
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
