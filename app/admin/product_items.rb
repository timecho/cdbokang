#encoding: utf-8
ActiveAdmin.register ProductItem do
  
  index do
    column :id
    column :title do |item|
      link_to item.title, admin_product_item_path(item)
    end
    column :price
    column :image_path
    column :is_visible
    column :updated_at
    default_actions
  end

  show do |item|
    div :class => 'panel' do
        h3 '产品详情'
        div :class => 'panel_contents' do
            div :class =>"attributes_table product_cate", :id=>"attributes_table_product_cate_#{item.product_cate_id}" do
                table do
                  tr do
                    th '编号'
                    td item.id
                  end
                  tr do
                    th '产品分类'
                    td ProductCate.find(item.product_cate_id).name unless ProductCate.find(item.product_cate_id).nil?
                  end
                  tr do
                    th '产品名称'
                    td item.title
                  end
                  tr do
                    th '产品价格'
                    td item.price
                  end
                  tr do
                    th '更新时间'
                    td item.updated_at
                  end
                  tr do
                    th '产品详情'
                    td simple_format item.description
                  end
                end
            end
        end
    end
  end

end
