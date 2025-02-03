import React, { useEffect, useState } from 'react'
import { useGetUsersQuery } from '../../../app/services/postsApi';
import { useusersStyles } from './styles';
import { Input, Table, TableBody, TableCell, TableHeader, TableRow } from '@fluentui/react-components';
import { Spinner } from '@fluentui/react';
import { Search16Regular } from '@fluentui/react-icons';
import { IUser } from '../../../app/types';

const Users = () => {
  const styles = useusersStyles();
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);


  const {
    data: users,
    isLoading,
  } = useGetUsersQuery('');

  useEffect(() => {
    if (users) {
      let filtered = users;

      if (search) {
        filtered = filtered.filter(user =>
          user.name.trim().toLowerCase().includes(search.trim().toLowerCase())
        );
      }

      setFilteredUsers(filtered);
    }
  }, [users, search]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <Input
            contentAfter={<Search16Regular />}
            className={styles.input_field}
            type="text"
            placeholder="Поиск по имени"
            id="search"
            name="search"
            appearance="outline"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div className={styles.table_container}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell style={{ width: '30px' }}>ID</TableCell>
                <TableCell>name</TableCell>
                <TableCell>username</TableCell>
                <TableCell>email</TableCell>
                <TableCell>street</TableCell>
                <TableCell>city</TableCell>
                <TableCell>phone</TableCell>
                <TableCell>website</TableCell>
              </TableRow>
            </TableHeader>
            {isLoading ? (
              <Spinner />
            ) : (
              <TableBody>
                {filteredUsers?.map((user) => (
                  <TableRow key={user?.id}>
                    <TableCell>{user?.id}</TableCell>
                    <TableCell>{user?.name}</TableCell>
                    <TableCell>{user?.username}</TableCell>
                    <TableCell>{user?.email}</TableCell>
                    <TableCell>{user?.address.street}</TableCell>
                    <TableCell>{user?.address.city}</TableCell>
                    <TableCell>{user?.phone}</TableCell>
                    <TableCell>{user?.website}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          {users?.length === 0 && (
            <div className={styles.empty_data}>
              <p style={{ textAlign: 'center', fontSize: '17px' }}>Нет данных</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Users