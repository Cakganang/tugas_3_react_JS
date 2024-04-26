import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: 0
        };
        

    }
    rubahPesanan(){
        this.setState((state, props)=>{
            return{
                pesan: state.list
            };
        });
    }
    pesanan(e){
        console.log(e.target.value);
    }

    render() {
        return(
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tr>
                        <td>
                            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                        <center>
                            <button onClick={this.state.datalist}>Pesan Sekarang</button>
                        </center>
                        </td>

                        <td>
                            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                            <center>
                                <button onClick={this.state.datalist}>Pesan Sekarang</button>
                            </center>
                        </td>

                        <td>
                            <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                            <center>
                            <button onClick={this.state.datalist}>Pesan Sekarang</button>
                            </center>
                        </td>

                        <td>
                            <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                            <center>
                            <button onClick={this.state.datalist}>Pesan Sekarang</button>
                            </center>
                        </td>

                        <td>
                            <ListMakanan datalist="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg "/>
                            <center>
                            <button onClick={this.state.datalist}>Pesan Sekarang</button>
                            </center>
                        </td>

                    </tr>
                </table>
                <br />
                <input type="text" onChange={this.pesanan} />
                <h3>Pesanan Anda : {this.state.list}</h3>
            </div>
        )
    }
}

export default MenuMakanan;