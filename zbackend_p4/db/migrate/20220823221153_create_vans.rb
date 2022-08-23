class CreateVans < ActiveRecord::Migration[7.0]
  def change
    create_table :vans do |t|
      t.integer :year
      t.string :make
      t.string :model
      t.integer :price
      t.string :imageURL
      t.belongs_to :buyer, null: false, foreign_key: true
      t.belongs_to :owner, null: false, foreign_key: true

      t.timestamps
    end
  end
end
