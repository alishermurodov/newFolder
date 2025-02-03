import React, { useRef, useState } from 'react'
import SegmentedControl from '../../shared/ui/SegmentedControl/SegmentedControl';
import Posts from '../../pages/Posts/ui/Posts';
import Users from '../../pages/Users/ui/Users';

const HeaderRoutes = () => {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <div>
            <SegmentedControl
                name="group-1"
                callback={(val) => setSelectedId(val)}
                controlRef={useRef()}
                segments={[
                    {
                        label: "posts",
                        value: 1,
                        ref: useRef(),
                        href: '/'
                    },
                    {
                        label: "users",
                        value: 2,
                        ref: useRef(),
                        href: '/users'
                    },
                ]}                
            />
            {/* {selectedId === 1 && <Posts/>} */}
            {/* {selectedId === 2 && <Users />} */}
        </div>
    )
}

export default HeaderRoutes