"use client";
import React, { useState } from 'react';
import { Card } from "./ui/card";

const PatentChecker = () => {
  const [mappings, setMappings] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  const checkText = () => {
    // 基础检查功能
    if (!text.trim() || !mappings.trim()) {
      setErrors([]);
      setHasChecked(true);
      return;
    }
    
    // 这里先实现一个简单的检查
    setErrors([{
      type: 'info',
      message: '检查完成，这是一个示例提示'
    }]);
    setHasChecked(true);
  };

  return (
    <Card>
      <Card.Content className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            技术特征-标号对应关系
          </label>
          <textarea 
            className="w-full h-32 p-2 border rounded-md"
            value={mappings}
            onChange={(e) => setMappings(e.target.value)}
            placeholder="100-底盘，110-第一腔体..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            需要审核的专利文本
          </label>
          <textarea 
            className="w-full h-48 p-2 border rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="输入需要审核的专利文本..."
          />
        </div>
        
        <button 
          onClick={checkText}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={!text.trim() || !mappings.trim()}
        >
          开始审核
        </button>
        
        {hasChecked && (
          <div className="space-y-2">
            {errors.length > 0 ? (
              errors.map((error, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-md bg-blue-50 text-blue-700"
                >
                  {error.message}
                </div>
              ))
            ) : (
              <div className="p-4 rounded-md bg-green-50 text-green-700">
                未发现明显的标号使用错误
              </div>
            )}
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

export default PatentChecker;