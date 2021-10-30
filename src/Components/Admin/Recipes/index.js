import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

import Header from '../shared/Header'
import './style.css'

export const ManageRecipes = () => {
    const [recipes, setRecipes] = useState([])

    const fetchRecipes = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/recipes/fetch-all')
            setRecipes(Object.values(data))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchRecipes()
    }, [])

    return (
        <div className="manage-recipes_container">
            <Header />
            <div className="manage-recipes_content">
                <div className="manage-recipes_header">
                    <h1 className="admin-heading">Manage Recipes</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map(recipe => (
                            <tr key={recipe.mId}>
                                <td>{recipe.mId}</td>
                                <td>{recipe.name}</td>
                                <td>{recipe.area}</td>
                                <td>{recipe.category}</td>
                                <td>${recipe.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}