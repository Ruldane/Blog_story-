import React from 'react';
import {useState} from 'react';
import {useRouter} from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import {createMovie} from "../actions";

const SideMneu = (props) => {
    const {categories} = props;
    const router = useRouter();
    let modal = null

    const handleFormSubmit = (movie) => {
        createMovie(movie).then((movie) => {
            router.push('/')
            modal.closeModal()
        })
    }

    return (
        <div>
            <Modal ref={elem => modal = elem } hasSubmit={false}>
                <MovieCreateForm
                    handleFormSubmit={handleFormSubmit}
                />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {categories.map(category => (
                    <a
                        onClick={() => props.changeCategory(category.name)}
                        key={category.id}
                        href="#"
                        className={`list-group-item ${props.activeCategory === category.name ? 'active' : '' }`}
                    >{category.name}

                    </a>
                    )
                )
                }
            </div>
        </div>
    )
};

export default SideMneu;
