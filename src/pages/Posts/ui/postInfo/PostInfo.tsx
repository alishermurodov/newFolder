import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { drawer_background, drawer_footer, usePostInfoStyles } from './styles';
import { IPost, IUser } from '../../../../app/types';
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerHeaderTitle, Field, Persona, Textarea } from '@fluentui/react-components';
import { mergeStyles } from '@fluentui/react';
import { City16Filled, Dismiss24Regular, Location16Filled, NumberCircle016Filled, Phone16Regular, WebAsset16Filled } from '@fluentui/react-icons';
import { useGetUsersQuery } from '../../../../app/services/postsApi';

interface IPostInfo {
    showDrawer: boolean;
    setShowDrawer: Dispatch<SetStateAction<boolean>>;
    selectedPost: IPost;
}

const PostInfo = ({ showDrawer, setShowDrawer, selectedPost }: IPostInfo) => {
    const styles = usePostInfoStyles();
    const [user, setUser] = useState<IUser | null>(null);

    const {
        data: users,
        isLoading,
    } = useGetUsersQuery('');

    useEffect(() => {
        if (users && selectedPost) {
            const foundUser = users.find(user => user.id === selectedPost.userId);
            setUser(foundUser || null);
        }
    }, [users, selectedPost]);




    return (
        <>
            <Drawer
                type="overlay"
                separator
                open={showDrawer}
                onOpenChange={(_, { open }) => setShowDrawer(open)}
                position="end"
                className={styles.container}
            >
                <DrawerHeader className={mergeStyles(drawer_background)}>
                    <DrawerHeaderTitle
                        action={
                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={<Dismiss24Regular />}
                                onClick={() => setShowDrawer(false)}
                            />
                        }
                    >
                        Post Info
                    </DrawerHeaderTitle>
                </DrawerHeader>
                <DrawerBody
                    className={mergeStyles(drawer_background)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    <Persona
                        textAlignment="start"
                        name={user?.name}
                        presence={{ status: "available" }}
                        secondaryText={user?.username}
                        tertiaryText={user?.email}
                    // quaternaryText="Microsoft"
                    />
                    <div style={{
                        width: '100%',
                        borderBottom: '.7px solid #888'
                    }}></div>
                    <div className={styles.user_info}>
                        <div className={styles.info_div}>
                            <p className={styles.name_key}><Location16Filled /> <span>street</span> </p><p>{user?.address.street}</p>
                        </div>
                        <div className={styles.info_div}>
                            <p className={styles.name_key}><City16Filled /> <span>city</span> </p><p>{user?.address.city}</p>
                        </div>
                        <div className={styles.info_div}>
                            <p className={styles.name_key}><NumberCircle016Filled /> <span>zipcode</span> </p><p>{user?.address.zipcode}</p>
                        </div>
                        <div className={styles.info_div}>
                            <p className={styles.name_key}><Phone16Regular /> <span>phone</span> </p><p>{user?.phone}</p>
                        </div>
                        <div className={styles.info_div}>
                            <p className={styles.name_key}><WebAsset16Filled /> <span>website</span> </p><p>{user?.website}</p>
                        </div>
                    </div>
                    <div style={{
                        width: '100%',
                        borderBottom: '.7px solid #888'
                    }}></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px'
                    }}>
                        {/* <div className="">
                            <p className={styles.post_title}>Название</p>
                            <p>{selectedPost?.title}</p>
                        </div>
                        <div className="">
                            <p className={styles.post_title}>Описание</p>
                            <p>{selectedPost?.body}</p>
                        </div> */}
                        <Field size="medium" label="Название">
                            <Textarea value={selectedPost?.title} />
                        </Field>
                        <Field size="medium" label="Описание">
                            <Textarea 
                            value={selectedPost?.body}                             
                            rows={6}
                            />
                        </Field>
                    </div>
                </DrawerBody>
                <DrawerFooter className={mergeStyles(drawer_footer)}>
                    <Button
                        form="add_service"
                        type="reset"
                        appearance="secondary"
                        onClick={() => setShowDrawer(false)}
                    >
                        Отмена
                    </Button>
                    {/* <Button appearance="primary" form="add_service" type="submit">
                        Добавить
                    </Button> */}
                </DrawerFooter>
            </Drawer>
        </>
    );
};

export default PostInfo;