import dotenv from 'dotenv'
import snowflake from 'snowflake-sdk';
snowflake.configure({ ocspFailOpen: false });

dotenv.config();

export function getConnection() {

    console.log("Inside getConnectionPool() ...");

    const connection = snowflake.createConnection({
        //accessUrl: process.env.accessUrl,
        authenticator: 'SNOWFLAKE',
        account: process.env.SNOWFLAKE_ACCOUNT ?? '',
        username: process.env.SNOWFLAKE_USERNAME ?? '',
        password: process.env.SNOWFLAKE_PASSWORD,
        clientSessionKeepAlive: true,
        jsTreatIntegerAsBigInt: true,
        database: process.env.SNOWFLAKE_DATABASE,
        schema: process.env.SNOWFLAKE_SCHEMA
    });

    connection.connect((err, conn) => {
        console.log("Inside connection.connect()");
        if (err) {
            console.error('Unable to connect: ' + err.message);
            throw new Error("Couldn't get the connection: " + err);
        }
        else {
            console.log('Successfully connected to Snowflake');
            console.log("connectionId is: ", conn.getId());
            return conn;
        }
    });
    return connection;
}

export const terminateConnection = async (connection: snowflake.Connection) => {
    try{
        return connection.destroy(function (err, _conn) {
            if (err) {
                console.error('Unable to disconnect: ' + err.message);
                return err.message;
            } else {
                console.log('Disconnected connection with id: ' + connection.getId());
                return 'Disconnected connection with id: ' + connection.getId();
            }
        });
    }catch(e){
        console.log("Exception in terminateConnection: ", e);
    }
}