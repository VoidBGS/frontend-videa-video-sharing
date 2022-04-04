import React from 'react';
import VideoBox from '../../components/video/VideoBox';
import "./homepage.css";

const Homepage = () => {

    var mockVids = [{
        source: "https://i.ytimg.com/vi/5Z2mnqFYFV0/hq720.jpg",
        title: "Big Ounce SHRUNK Kevin!? ",
        link: "/video/1",
        author: { profilePicSrc: "https://yt3.ggpht.com/EjQqWihI9-49mjhDiLd3OJ1ixeyaqEPdKXhDaCncg5R-0Ym1-mKw92MEeFO2QTsVgH2pYnfPGw=s48-c-k-c0x00ffffff-no-rj", name: "Kevin & Uncle Ben Clips" }
    },
    {
        source: "https://i.ytimg.com/vi/iT-cYYgKSSE/hqdefault.jpg",
        title: "Making a Million Dollars from CS:GO's Economy - quickly.",
        link: "/video/2",
        author: { profilePicSrc: "https://yt3.ggpht.com/nwV6fXfAnrPwDv3IT6rBxnYE1GOvt0ioHFAEegHDpfVfRzDZQHPkQy6yIKDXMNw8gpOzgFX6yug=s48-c-k-c0x00ffffff-no-rj", name: "3kliksphilip" }
    },
    {
        source: "https://i.ytimg.com/vi/0xrC8vaddcg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFp0wwmxhN-egqkQ6yDbgi4tG9vA",
        title: "World's Spinniest Table",
        link: "/video/3",
        author: { profilePicSrc: "https://yt3.ggpht.com/ytc/AKedOLQiZcSScNbGPna7N_GUs8ko8a7_emuWXJIZX6jEGg=s48-c-k-c0x00ffffff-no-rj", name: "Pongfinity" }
    },
    {
        source: "https://i.ytimg.com/vi/yOiqd8eQ8tI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZHzJfLlElQqysQvNJ0jjb9f_nwA",
        title: "May, Clarkson, Hammond 'Jaaaag' and Jaguar Stereotypes Compilation.",
        link: "/video/4",
        author: { profilePicSrc: "https://yt3.ggpht.com/ytc/AKedOLSNlJ6QJvByew6Lvj3aXozWh4lAQSI6o4A-rux-9w=s48-c-k-c0x00ffffff-no-rj", name: "Mustang150" }
    },
    ];

    var mockVids2 = [{
        source: "https://i.ytimg.com/vi/WrHV4xvtX14/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCT2xAeExDwQfLZeTKa2XnxDN9OIw",
        title: "Discovering Blackreach for the first time.",
        link: "/video/5",
        author: { profilePicSrc: "", name: "Paradox" }
    },
    {
        source: "https://i.ytimg.com/vi/MdExxcRrC9g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfFoSpCIHPUrA4XohYHHRMybU6CQ",
        title: "True Facts: Trap Jaw Ants",
        link: "/video/6",
        author: { profilePicSrc: "", name: "zefrank" }
    },
    {
        source: "https://i.ytimg.com/vi/l327LbNx1_o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXqd3UEs6szfvroBjnU5YnfjRX0A",
        title: "I bought an abandoned tiny house.",
        link: "/video/7",
        author: { profilePicSrc: "", name: "George Dunnett" }
    },
    {
        source: "https://i.ytimg.com/vi/wUs9nVe41BU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_rKglXuNYuacEwXX5lQeLT8FxLg",
        title: "Spell of the Moon (Synthwave - Outrun - Futuresynth Mix)",
        link: "/video/8",
        author: { profilePicSrc: "", name: "Synthwave Gems" }
    },
    ];



    var vidRows = [mockVids, mockVids2, mockVids, mockVids2];

    return (
        <div className='videa-homepage w-full'>
            {
                vidRows.map(row => (
                    <div className='flex evenly w-full wrap'>
                        {row.map(vid => (
                            <VideoBox Video={vid} key={vid.link} />
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

export default Homepage;