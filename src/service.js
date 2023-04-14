import axios from 'axios';
import pool from './db.js';
import * as dotenv from 'dotenv';
dotenv.config();


class Service {

    async getNewUser() {
        let newUser;
        let response = await axios.get('https://randomuser.me/api/?nat=us');
        newUser = await response.data.results[0];
        this.insertData(newUser);
        return newUser;
    }

    async insertData(newUser) {
        const query = {
            text: `INSERT INTO 
            users(
                gender, title, first_name,
                last_name, street_number, street_name, city,
                state, country, postcode, latitude, longitude,
                timezone_offset, timezone_description, email,
                uuid, username, password, salt, md5, sha1,
                sha256, dob_date, dob_age, registered_date,
                registered_age, phone, cell, id_name, id_value,
                picture_large, picture_medium, picture_thumbnail, nat
            ) VALUES(
                $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,
                $13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,
                $25,$26,$27,$28,$29,$30,$31,$32,$33,$34
            )`,
            values: [newUser.gender,
            newUser.name.title,
            newUser.name.first,
            newUser.name.last,
            newUser.location.street.number,
            newUser.location.street.name,
            newUser.location.city,
            newUser.location.state,
            newUser.location.country,
            newUser.location.postcode,
            newUser.location.coordinates.latitude,
            newUser.location.coordinates.longitude,
            newUser.location.timezone.offset,
            newUser.location.timezone.description,
            newUser.email,
            newUser.login.uuid,
            newUser.login.username,
            newUser.login.password,
            newUser.login.salt,
            newUser.login.md5,
            newUser.login.sha1,
            newUser.login.sha256,
            new Date(newUser.dob.date),
            newUser.dob.age,
            new Date(newUser.registered.date),
            newUser.registered.age,
            newUser.phone,
            newUser.cell,
            newUser.id.name,
            newUser.id.value,
            newUser.picture.large,
            newUser.picture.medium,
            newUser.picture.thumbnail,
            newUser.nat],
        };
        try {
            const client = await pool.connect();
            await client.query(query);
            client.release();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAllUsers() {
        try {
            const res = await pool.query('SELECT * FROM users');
            return res.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}


export default new Service();