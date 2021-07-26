import React, { useEffect, useState } from 'react';
import Clients from "../AppClient/clients"
import { RenderPage } from "utils/page"

import { useSelector } from 'react-redux';
import DisplayMembers from './DisplayMembers';

import { Markup } from 'interweave';
import FuzzySearch from 'fuzzy-search';
import { FILE_URL } from "appRedux/api/root"
let searcher;
const AppServices = () => {
    const { simplechangeLists, memberLists } = useSelector(({ webpages }) => webpages);
    const [dataSource, setDataSource] = useState([])
    searcher = new FuzzySearch(memberLists, ["title", "description"], { caseSensitive: false });
    useEffect(() => {
        const LoadData = async () => {
            setDataSource(await memberLists)
        }
        LoadData()
    }, [memberLists])
    const OnSearch = (e) => setDataSource(searcher.search(e.target.value))

 
    return (
        <section id="members" className=" section services">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <p>{RenderPage(simplechangeLists, "members") ? RenderPage(simplechangeLists, "members").title : ""}</p>
                </header>
                <div className="row gy-4">
                    <div className="col-lg-2"></div>
                     <div className="col-lg-8 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <p>{RenderPage(simplechangeLists, "members") ?
                            <Markup content={JSON.parse(RenderPage(simplechangeLists, "members").description)} />
                            : ""}</p>
                    </div> 
                    <div className="col-lg-2"></div>
                </div>
                <div className="clients-slider swiper-container">
                    <Clients />
                </div>
                <div className="row gy-4">
                    <div className="col-lg-12">
                        <DisplayMembers
                            placeholder="Search for Members"
                            SearchForHandler={OnSearch}
                            dataSource={dataSource}
                            columns={[
                                {
                                    title: "Members Details",
                                    render: (record) => (
                                        <React.Fragment>
                                            {record.id}
                                            <br />
                                            {record.title}
                                            <br />
                                            {record.description}
                                            <br />
                                            <img
                                                src={FILE_URL + "/" + record.logo}
                                                style={{ height: 30, width: 70 }}
                                            //size="large"
                                            />
                                            <br />
                                            {record.url}
                                        </React.Fragment>
                                    ),
                                    responsive: ["xs"]
                                },
                                {
                                    title: 'ID',
                                    dataIndex: 'id',
                                    key: 'id',
                                    width: 70,
                                    fixed: 'left',
                                    responsive: ['lg', 'md', 'sm'],
                                }, {
                                    title: 'Title',
                                    dataIndex: 'title',
                                    key: 'title',
                                    responsive: ['lg', 'md', 'sm'],
                                }, {
                                    title: 'Description',
                                    dataIndex: 'description',
                                    key: 'description',
                                    responsive: ['lg', 'md', 'sm'],
                                }, {
                                    title: 'Logo',
                                    dataIndex: 'logo',
                                    key: 'logo',
                                    responsive: ['lg', 'md', 'sm'],
                                    render: logo => (
                                        <img
                                            src={FILE_URL + "/" + logo}
                                            style={{ height: 30, width: 70 }}
                                        //size="large"
                                        />
                                    )
                                }, {
                                    title: 'Url',
                                    dataIndex: 'url',
                                    key: 'url',
                                    responsive: ['lg', 'md', 'sm'],
                                },

                            ]}
                        />
                    </div>
                </div>
                {/*   <div className="row gy-4">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-box blue">
                            <i className="ri-discuss-line icon"></i>
                            <h3>Nesciunt Mete</h3>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                            <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-box orange">
                            <i className="ri-discuss-line icon"></i>
                            <h3>Eosle Commodi</h3>
                            <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                            <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-box green">
                            <i className="ri-discuss-line icon"></i>
                            <h3>Ledo Markt</h3>
                            <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                            <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-box red">
                            <i className="ri-discuss-line icon"></i>
                            <h3>Asperiores Commodi</h3>
                            <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                            <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-box purple">
                            <i className="ri-discuss-line icon"></i>
                            <h3>Velit Doloremque.</h3>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                            <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                        <div className="service-box pink">
                            <i className="ri-discuss-line icon"></i>
                            <h3>Dolori Architecto</h3>
                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                            <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                </div> */}

            </div>

        </section>
    );
};

export default AppServices;