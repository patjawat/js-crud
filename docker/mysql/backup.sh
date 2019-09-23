#!/bin/bash
NOW=$(date +"%m-%d-%Y_%H-%M")
FILE="backup-$NOW.sql"
docker exec mariadb sh -c 'exec mysqldump -uroot -p"docker" --databases takumiin_patjawat' > "./backups/$FILE"
echo "Backing up data complate."
