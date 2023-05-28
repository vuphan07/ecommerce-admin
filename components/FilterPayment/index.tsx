import React from 'react';
import CustomSelect from '../Select';
import { Select, Form, DatePicker } from 'antd';
import { useRouter } from 'next/router';
import { SUBCRIPTION_PATH } from '../../constants';

const FilterFields = () => {
  const router = useRouter();
  const isSubcription = router.pathname === SUBCRIPTION_PATH;
  return (
    <>
      <div className="input-name status">
        <span className="span_description fw6">Trạng thái</span>
        <Form.Item name="status">
          <CustomSelect placeholder="Tất cả" allowClear>
            <Select.Option key={1} value={''}>
              All
            </Select.Option>
            {['pending', 'processing', 'delivered', 'cancelled'].map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </CustomSelect>
        </Form.Item>
      </div>
    </>
  );
};

export default FilterFields;
