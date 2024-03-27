
import FruitsCol from "./fruitsCol"
import fruitsData from "./fruitsData"

export default function FruitsDiv(){
    const fruits = fruitsData.map(fruit =>{
        return <FruitsCol 
        key = {fruit.id}
        fruit = {fruit}
        //upper mag dadagdag kapa ng variable bago properties like props.items.name
        //sa baba parang individual mona isinet lahat ng key-value pair
        //like name = fruit.name -> origin-> fruits.origin
        // {...fruit}
        />
    })
    return (
        <div className="fruitsContainer container">
            <div className="row g-4">
                {fruits}
            </div>
        </div>
    )
}