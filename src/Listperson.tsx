import { useEffect, useState } from "react";
import type { IPerson } from "./Models/IPerson"
import { Link } from "react-router-dom";
import { getPersons } from "./services/employeeservice";

const Listperson: React.FC=() => {
    const [person, setPerson] = useState<IPerson[]>([]);
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchPersons = async () => {
            try {
                const data = await getPersons();
                if (isMounted)
                    setPerson(data);

            }
            catch (error) {
                if (isMounted)
                    console.error("dhehfl: ", error);
            }
        };
        fetchPersons();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

    return (
        <div> <h4>
            <Link to="/create">Create</Link>
        </h4><h2>Employees Data...</h2>
            <table><thead>
                <tr><th>Id</th><th>Name</th><th>Email</th><th>Department</th>
                </tr>
            </thead>
                <tbody>
                    {person.map((per) => (
                        <tr key={per._id}>
                            <td>{per._id}</td>
                            <td>{per.firstname}</td>
                            <td>{per.lastname}</td>
                            <td><Link to={`/emp/${per._id}`}>Display</Link>
                            </td>
                            <td><Link to={`/empup/${per._id}`}>Edit</Link>
                            </td>
                            <td><Link to={`/empdel/${per._id}`}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default Listperson;