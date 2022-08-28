class UpdateUsername < ActiveRecord::Migration[7.0]
  def change
    rename_column :owners, :name, :username
  end
end
