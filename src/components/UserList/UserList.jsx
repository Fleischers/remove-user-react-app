import UserListItem from "../UserListItem";
import s from "./UserList.module.css";
import { useEffect, useState } from "react";

const userLists = [
  {
    id: 2728,
    name: "Chinmayananda Kaniyar",
    email: "chinmayananda_kaniyar@boehm.io",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2721,
    name: "Rev. Giriraj Kapoor",
    email: "rev_giriraj_kapoor@white-lynch.org",
    gender: "male",
    status: "active",
  },
  {
    id: 2718,
    name: "Chakravartee Gowda JD",
    email: "chakravartee_gowda_jd@rath.info",
    gender: "male",
    status: "inactive",
  },
  {
    id: 2717,
    name: "Smriti Mahajan",
    email: "smriti_mahajan@nolan-blanda.name",
    gender: "male",
    status: "active",
  },
  {
    id: 2716,
    name: "Harinakshi Achari",
    email: "achari_harinakshi@ryan.org",
    gender: "male",
    status: "active",
  },
  {
    id: 2714,
    name: "Rep. Chandramohan Banerjee",
    email: "rep_banerjee_chandramohan@greenfelder-schuppe.org",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2712,
    name: "Divjot Achari",
    email: "achari_divjot@price.biz",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2711,
    name: "Bhamini Menon",
    email: "bhamini_menon@pacocha.org",
    gender: "male",
    status: "active",
  },
  {
    id: 2710,
    name: "Govinda Pothuvaal",
    email: "pothuvaal_govinda@pouros.net",
    gender: "female",
    status: "active",
  },
  {
    id: 2708,
    name: "Dipendra Sinha",
    email: "sinha_dipendra@bayer-satterfield.net",
    gender: "female",
    status: "active",
  },
  {
    id: 2707,
    name: "Dhanesh Nair JD",
    email: "nair_dhanesh_jd@swaniawski.org",
    gender: "male",
    status: "active",
  },
  {
    id: 2705,
    name: "Gopee Shah",
    email: "gopee_shah@abernathy.org",
    gender: "male",
    status: "active",
  },
  {
    id: 2704,
    name: "Tanushri Johar",
    email: "tanushri_johar@mertz.info",
    gender: "male",
    status: "inactive",
  },
  {
    id: 2703,
    name: "Chandraswaroopa Pilla Ret.",
    email: "chandraswaroopa_pilla_ret@streich-muller.net",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2702,
    name: "Deeptanshu Jha",
    email: "jha_deeptanshu@lowe-fadel.org",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2700,
    name: "Vasundhara Sinha",
    email: "vasundhara_sinha@lebsack-mraz.name",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2699,
    name: "Durgeshwari Kaur III",
    email: "kaur_durgeshwari_iii@jones-powlowski.org",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2698,
    name: "Uma Patil",
    email: "patil_uma@anderson.org",
    gender: "male",
    status: "inactive",
  },
  {
    id: 2697,
    name: "The Hon. Jagadish Embranthiri",
    email: "jagadish_hon_the_embranthiri@mccullough-little.co",
    gender: "female",
    status: "inactive",
  },
  {
    id: 2696,
    name: "Chandrakala Agarwal",
    email: "agarwal_chandrakala@dicki-robel.net",
    gender: "female",
    status: "inactive",
  },
];

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(async () => { 
      return await getUsers(); 
    });
  }, []);

  async function getUsers() {
    return await fetch('https://gorest.co.in/public/v2/users');
  }

  return (
    <ul className={s.userList}>
      {users.map((item) => (
        <li className={s.userItem} key={item.id}>
          <UserListItem user={item}/>
        </li>
      ))}
    </ul>
  );
}
