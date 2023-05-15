import { Component } from 'react';
import PropTypes from "prop-types";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    handleInput = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };


    handleAddUser = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.resetForm();
    };
    resetForm = () => {
       this.setState(
           {
               name: '',
               number: '',
           }
       )
    };
    render() {
        return (
            <>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onSubmit={this.handleAddUser}
                >
                    <label style = {{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: 18
                    }}>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={this.handleInput}
                        />
                    </label>
                    <label  style = {{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: 18,
                        marginTop: 20
                    }}>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={this.handleInput}
                        />
                    </label>
                    <button type="submit"  style = {{
                       marginTop: 20
                    }}>Add contact</button>
                </form>
            </>
        );
    }
}

export default ContactForm;


ContactForm.propTypes = {
    onSubmit:PropTypes.func
}
