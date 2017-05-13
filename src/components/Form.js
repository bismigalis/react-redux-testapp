import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { GENRES } from '../consts.js';
import validate from 'validate.js';



const schema = {
  title: {
     presence: {message:"^Название фильма не может быть пустым"},
    length: {
       minimum: 3,
       maximum: 36,
       tooShort:"^Название фильма не может быть короче %{count}",
       tooLong:"^Название фильма не может быть длиннее %{count}"
    },
  },
  year: {
     presence: {message:"^Год не может быть пустым"},
     numericality: {
        greaterThanOrEqualTo: 1900,
        notGreaterThanOrEqualTo:"^Год должен быть больше или равен %{count}"
     },
     length: {
        is: 4,
        message: "^Год должен состоять из 4 цифр"
     },
  },
  genre: {
     presence: {message:"^Жанр не может быть пустым"},
  },
  rating: {
     presence: {message:"^Рейтинг не может быть пустым"},
  }
};




const Input = ({errors, type, placeholder, onChange, value}) => (
   <div className={errors?'form-group has-error':'form-group'}>
     <input type={type}
            className="form-control"
            placeholder={placeholder}
            value={value || ''}
            onChange={onChange}
            />
     {errors?<span className="help-block">{errors[0]}</span>:null}
   </div>
);

const Select = ({value, errors, label, data, onChange}) => (
   <div className={errors?'form-group has-error':'form-group'}>
     <label className="control-label">{label}:</label>
     <select value={value || ''} onChange={onChange} className="form-control">
       {data.map((v)=>(<option key={v}>{v}</option>))}
     </select>
      {errors?<span className="help-block">{errors[0]}</span>:null}
   </div>
);


const Rating = ({value, errors, onChange}) => {
   return (
   <div className={errors?'form-group has-error':'form-group'}>
     <label className="control-label" style={{float: 'left', marginTop: '1em'}}>Рейтинг: </label>
     <StarRatingComponent
        name="rating_input"
        starCount={5}
        value={value || -1}
        onStarClick={onChange}
        />
     {errors?<span className="help-block">{errors[0]}</span>:null}
   </div>)
};


export default class Form extends React.Component {
   constructor(props) {
      super(props);
      this.GENRES = (x => {x.unshift(''); return x})(GENRES);
      this.state = {errors: {}, data: {}};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetForm = this.resetForm.bind(this);
   }

   handleChange(key, value) {
      //var updater = {data: {}};
      //updater.data[key] = value;
      this.setState((prevState, props) => {
         prevState['data'][key] = value;
         return prevState;
      });
   }

   handleSubmit(event) {
      event.preventDefault();
      var errors = validate(this.state.data, schema);
      if (errors) {
         this.setState({errors: errors});
      } else {
         //console.log(this.state.data);
         this.props.addFilm(this.state.data);
         this.setState({data:{}, errors: {}});
      }
   }

   resetForm(e) {
      this.setState({data:{}, errors: {}});
      this.forceUpdate();
   }

   render() {
      return (
         <div className="">
           <form onSubmit={this.handleSubmit} className="panel panel-default">
             <div className="panel-heading"><h4>Добавление фильма</h4></div>

             <div className="panel-body">
               <Input type="text" placeholder="Название фильма"
                      errors={this.state.errors.title} value={this.state.data.title} onChange={(e) => this.handleChange('title', e.target.value)} />
               <Input type="text" placeholder="Год"
                        errors={this.state.errors.year} value={this.state.data.year} onChange={(e) => this.handleChange('year', e.target.value)} />
               <Select errors={this.state.errors.genre} data={this.GENRES} label="Жанр" value={this.state.data.genre} onChange={(e) => this.handleChange('genre', e.target.value)} />
               <Rating errors={this.state.errors.rating} value={this.state.data.rating} onChange={(nextValue, prevValue, name) => this.handleChange('rating', nextValue)} />
             </div>
             <div className="panel-footer">
               <input type="submit" value="Сохранить" className="btn btn-primary" style={{float: "right"}} />
               <input type="button" value="Сброс" className="btn" onClick={this.resetForm} />
             </div>
           </form>
           {/* <pre>{JSON.stringify(this.state)}</pre> */}
         </div>
      );
   }
}
