class Owner < ApplicationRecord
    has_many :vans
    has_many :buyers, through: :vans

    has_secure_password
end
