import { Button, Dropdown, Input, Option, Spinner, Table, TableBody, TableCell, TableCellActions, TableHeader, TableRow, useId } from '@fluentui/react-components';
import React, { useEffect, useState } from 'react';
import { usePostsStyles } from './styles';
import { ArrowLeft16Regular, ArrowRight16Regular, Info16Regular, Search16Regular } from '@fluentui/react-icons';
import { useGetPostsQuery, useGetUsersQuery } from '../../../app/services/postsApi';
import PostInfo from './postInfo/PostInfo';
import { IPost } from '../../../app/types';

const LIMIT = 10;

const Posts = () => {
  const styles = usePostsStyles();
  const dropdownId = useId("dropdown-default");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const {
    data: posts,
    isLoading,
    isFetching,
  } = useGetPostsQuery({ page, limit: LIMIT });

  const {
    data: users,
  } = useGetUsersQuery('');

  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  const [showAddDrawer, setShowAddDrawer] = useState(false);
  const [selectedPost, setSelectedPost] = useState<IPost>();

  useEffect(() => {
    if (posts) {
      let filtered = posts;

      if (search) {
        filtered = filtered.filter(post =>
          post.title.trim().toLowerCase().includes(search.trim().toLowerCase())
        );
      }

      if (selectedAuthor) {
        filtered = filtered.filter(post => post.userId === parseInt(selectedAuthor));
      }

      setFilteredPosts(filtered);
    }
  }, [posts, search, selectedAuthor]);

  const handleSelect = (post: IPost) => {
    setSelectedPost(post);
    setShowAddDrawer(true);
  };

  const handleAuthorChange = (_, data) => {
    setSelectedAuthor(data.optionValue); // Обновляем выбранного автора
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <Input
            contentAfter={<Search16Regular />}
            className={styles.input_field}
            type="text"
            placeholder="Поиск по названию"
            id="search"
            name="search"
            appearance="outline"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className={styles.dropdown_users}>
            <Dropdown
              id={dropdownId}
              placeholder="Фильтр по автору"
              onOptionSelect={handleAuthorChange}
            >
              <Option value=''>
                {''}
              </Option>
              {users?.map((user) => (
                <Option key={user.id} value={user.id.toString()}>
                  {user.id + ' ' + user.name}
                </Option>
              ))}
            </Dropdown>
          </div>
        </div>
        <div className={styles.table_container}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell style={{ width: '30px' }}>ID</TableCell>
                <TableCell style={{ width: '50px' }}>АвторID</TableCell>
                <TableCell>Название</TableCell>
                <TableCell>Описание</TableCell>
                <TableCell style={{ width: '15%' }}>Действия</TableCell>
              </TableRow>
            </TableHeader>
            {isLoading ? (
              <Spinner />
            ) : (
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>{post.id}</TableCell>
                    <TableCell>{post.userId}</TableCell>
                    <TableCell>
                      {post.title.length > 30
                        ? `${post.title.slice(0, 40)}...`
                        : post.title}
                    </TableCell>
                    <TableCell>
                      {post.body.length > 50
                        ? `${post.body.slice(0, 50)}...`
                        : post.body}
                    </TableCell>
                    <TableCell>
                      <TableCellActions style={{ paddingRight: '20%' }}>
                        <Button
                          icon={<Info16Regular />}
                          appearance="subtle"
                          onClick={() => handleSelect(post)}
                        />
                      </TableCellActions>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          {filteredPosts.length === 0 && (
            <div className={styles.empty_data}>
              <p style={{ textAlign: 'center', fontSize: '17px' }}>Нет данных</p>
            </div>
          )}
        </div>
        <div className={styles.pagination}>
          <Button
            disabled={page === 1 || isFetching}
            onClick={() => setPage(page - 1)}
          >
            <ArrowLeft16Regular />
          </Button>
          <span>Страница {page}</span>
          <Button
            disabled={posts?.length < LIMIT || isFetching}
            onClick={() => setPage(page + 1)}
          >
            <ArrowRight16Regular />
          </Button>
        </div>
      </div>

      <PostInfo
        showDrawer={showAddDrawer}
        setShowDrawer={setShowAddDrawer}
        selectedPost={selectedPost}
      />
    </>
  );
};

export default Posts;