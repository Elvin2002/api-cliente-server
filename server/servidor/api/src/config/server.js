import mysql2 from 'mysql2/promise'

class Server_conection{

    constructor(this, host_name , user_name, password,port_connection, database_name){
        this.host_name = host_name,
        this.user_name = user_name,
        this,password = password,
        this,port_connection = port_connection,
        this.database_name = database_name
    }

    Server_run(){
        const query = mysql2.createPool({host:this.host_name,user:this.user_name,
                                        password:this.password,port:this.port_connection,
                                        database:this.database_name 
        })

        return query
    }

}
export default Server_conection