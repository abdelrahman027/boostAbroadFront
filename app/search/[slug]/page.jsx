"use client";
import { Row, Col, Spin } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingOutlined } from '@ant-design/icons';

export default function Programs({ params }) {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/programs/")
            .then((res) => {
                setPrograms(res.data.programs.filter(program => program.university.name.toLowerCase().startsWith(params.slug.split("_").join(' ').toLowerCase())))
            })
    }, []);

    return (
        <div className="container min-h-lvh">
            <h2 className="my-30 text-4xl text-dark my-10 font-bold text-center">Search  for "{params.slug}"</h2>
            <Row className="justify-center" gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                {
                    programs.length > 0 ?
                        programs.map(program =>
                            <Col className="p-2" key={program.id}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg p-3 bg-white">
                                    <div className="flex items-center">
                                        <div className="flex-shrink">
                                            <img src={program.university.image} width="120" alt="Sunset in the mountains" />
                                        </div>
                                        <div className="flex-grow ms-5">
                                            <div className="text-dark">{program.university.name}</div>
                                            <div>{program.university.city} , {program.university.country}</div>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 text-dark">{program.name}</div>
                                        <div className="flex items-center gap-8">
                                            <img src="/feature_section/1.png" width="20" />
                                            {/* EDIT */}
                                            <span>{program.given_degree}</span>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="flex items-center gap-4">
                                            <img src="/icons/hourglass.svg" width="12" />
                                            <span>Application Deadlines : </span>
                                        </div>
                                        <div className="flex my-4 justify-between">
                                            <div>
                                                <div>First Semester</div>
                                                <div className="text-dark">{program.first_sem_date}</div>
                                            </div>
                                            <div>
                                                <div>Second Semester</div>
                                                <div className="text-dark">{program.second_sem_date}</div>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="flex my-4 justify-between">
                                            <div className="w-1/2">
                                                <div>tuition fees <br /> per semester</div>
                                                <div className="text-dark">EGP {program.fees}</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div>Duration <br />  ( Years )</div>
                                                <div className="text-dark">{program.duration_from} - {program.duration_to}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                        :
                        <Spin indicator={<LoadingOutlined spin />} size="large" />

                }
            </Row>
        </div>
    )
}
