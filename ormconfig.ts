import { User } from "src/users/entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions =  {
    type: "mysql",
    host: 'localhost',
    username: 'root',
    port: 3306,
    password: 'root',
    database: 'test',
    entities: [User]
}

export default config; 