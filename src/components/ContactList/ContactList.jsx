import PropTypes from "prop-types";

function ContactList({ listItems, onDelete}) {
    return(
        <ul>
            { listItems.map( ( { id, name, number } ) => {
                return (
                    <li key={ id } style = {{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems: "center",
                        fontSize: 25
                    }}>
                        { name }: { number }
                        <button onClick={ () => onDelete( id ) } style={{
                            marginLeft: 15
                        }}>delete</button>
                    </li>
                );
            } ) }

        </ul>
    )

}

export default ContactList;

ContactList.propTypes = {
    listItems:PropTypes.array,
    onDelete:PropTypes.func
}